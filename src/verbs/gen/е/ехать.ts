import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ехать: PerfectVerb = {
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
  imperativeInformal: Word('езжай', 3),
  imperativeFormal: Word('езжайте', 3),
  imperfect: ['поехать'],
};

perfectVerbs.set(ехать.name.text, ехать);

export { ехать };