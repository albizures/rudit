import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предписать: PerfectVerb = {
  name: Word('предписать', 7),
  singular1stPerson: Word('предпишу', 7),
  singular2ndPerson: Word('предпишешь', 5),
  singular3rdPerson: Word('предпишет', 5),
  plural1stPerson: Word('предпишем', 5),
  plural2ndPerson: Word('предпишете', 5),
  plural3rdPerson: Word('предпишут', 5),
  masculinePast: Word('предписал', 7),
  femininePast: Word('предписала', 7),
  neuterPast: Word('предписало', 7),
  pluralPast: Word('предписали', 7),
  imperativeInformal: Word('предпиши', 7),
  imperativeFormal: Word('предпишите', 7),
  imperfect: [],
};

perfectVerbs.set(предписать.name.text, предписать);

export { предписать };