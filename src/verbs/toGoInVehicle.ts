import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const toGoInVehicle: Verb = {
  name: Word('ехать', 0),
  singular1stPerson: Word('еду', 0),
  singular2ndPerson: Word('едешь', 0),
  singular3rdPerson: Word('едет', 0),
  plural1stPerson: Word('едем', 0),
  plural2ndPerson: Word('едете', 0),
  plural3rdPerson: Word('едут', 0),
  masculinePast: Word('ехал', 0),
  femininePast: Word('ехала', 0),
  neuterPast: Word('ехало', 0),
  pluralPast: Word('ехали', 0),
  imperativeInformal: Word('поезжай', 5),
  imperativeFormal: Word('поезжайте', 5),
};

export { toGoInVehicle };
