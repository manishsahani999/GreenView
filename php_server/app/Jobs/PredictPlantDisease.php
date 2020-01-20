<?php

namespace App\Jobs;

use App\Models\PlantImage;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class PredictPlantDisease implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $plantImage;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(PlantImage $plantImage)
    {
        $this->plantImage = $plantImage;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        $baseimage = 'data:image/jpeg;base64,' . base64_encode(file_get_contents($this->plantImage->getFirstMedia('plant_images')->getPath()));

        $client = new \GuzzleHttp\Client();

        \Log::info($this->plantImage);


        $res = $client->post('http://ec2-3-92-127-55.compute-1.amazonaws.com:9000/predict', [
            'multipart' => [
                [
                    'name'     => 'plant_image',
                    'contents' => $baseimage,
                ],
            ],
        ]);

        // \Log::info($baseimage); 


        
        $data = json_decode($res->getBody(), true);

        // $this->plantImage->update([
        //     'disease_name' => $data['data']
        // ]);
        \Log::info($data); 
    }
}
