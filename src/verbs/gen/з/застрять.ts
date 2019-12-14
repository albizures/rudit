import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застрять: PerfectVerb = {
  name: Word('застрять', 5),
  singular1stPerson: Word('застряну', 5),
  singular2ndPerson: Word('застрянешь', 5),
  singular3rdPerson: Word('застрянет', 5),
  plural1stPerson: Word('застрянем', 5),
  plural2ndPerson: Word('застрянете', 5),
  plural3rdPerson: Word('застрянут', 5),
  masculinePast: Word('застрял', 5),
  femininePast: Word('застряла', 5),
  neuterPast: Word('застряло', 5),
  pluralPast: Word('застряли', 5),
  imperativeInformal: Word('застрянь', 5),
  imperativeFormal: Word('застряньте', 5),
  imperfect: ['застревать'],
};

perfectVerbs.set(застрять.name.text, застрять);

export { застрять };