import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предписывать: PerfectVerb = {
  name: Word('предписывать', 5),
  singular1stPerson: Word('предписываю', 5),
  singular2ndPerson: Word('предписываешь', 5),
  singular3rdPerson: Word('предписывает', 5),
  plural1stPerson: Word('предписываем', 5),
  plural2ndPerson: Word('предписываете', 5),
  plural3rdPerson: Word('предписывают', 5),
  masculinePast: Word('предписывал', 5),
  femininePast: Word('предписывала', 5),
  neuterPast: Word('предписывало', 5),
  pluralPast: Word('предписывали', 5),
  imperativeInformal: Word('предписывай', 5),
  imperativeFormal: Word('предписывайте', 5),
  imperfect: [],
};

perfectVerbs.set(предписывать.name.text, предписывать);

export { предписывать };