import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const амальгамировать: PerfectVerb = {
  name: Word('амальгамировать', 8),
  singular1stPerson: Word('амальгамирую', 8),
  singular2ndPerson: Word('амальгамируешь', 8),
  singular3rdPerson: Word('амальгамирует', 8),
  plural1stPerson: Word('амальгамируем', 8),
  plural2ndPerson: Word('амальгамируете', 8),
  plural3rdPerson: Word('амальгамируют', 8),
  masculinePast: Word('амальгамировал', 8),
  femininePast: Word('амальгамировала', 8),
  neuterPast: Word('амальгамировало', 8),
  pluralPast: Word('амальгамировали', 8),
  imperativeInformal: Word('амальгамируй', 8),
  imperativeFormal: Word('амальгамируйте', 8),
  imperfect: [],
};

perfectVerbs.set(амальгамировать.name.text, амальгамировать);

export { амальгамировать };