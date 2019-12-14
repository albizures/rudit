import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взмывать: PerfectVerb = {
  name: Word('взмывать', 5),
  singular1stPerson: Word('взмываю', 5),
  singular2ndPerson: Word('взмываешь', 5),
  singular3rdPerson: Word('взмывает', 5),
  plural1stPerson: Word('взмываем', 5),
  plural2ndPerson: Word('взмываете', 5),
  plural3rdPerson: Word('взмывают', 5),
  masculinePast: Word('взмывал', 5),
  femininePast: Word('взмывала', 5),
  neuterPast: Word('взмывало', 5),
  pluralPast: Word('взмывали', 5),
  imperativeInformal: Word('взмывай', 5),
  imperativeFormal: Word('взмывайте', 5),
  imperfect: [],
};

perfectVerbs.set(взмывать.name.text, взмывать);

export { взмывать };