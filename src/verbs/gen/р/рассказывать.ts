import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассказывать: PerfectVerb = {
  name: Word('рассказывать', 5),
  singular1stPerson: Word('рассказываю', 5),
  singular2ndPerson: Word('рассказываешь', 5),
  singular3rdPerson: Word('рассказывает', 5),
  plural1stPerson: Word('рассказываем', 5),
  plural2ndPerson: Word('рассказываете', 5),
  plural3rdPerson: Word('рассказывают', 5),
  masculinePast: Word('рассказывал', 5),
  femininePast: Word('рассказывала', 5),
  neuterPast: Word('рассказывало', 5),
  pluralPast: Word('рассказывали', 5),
  imperativeInformal: Word('рассказывай', 5),
  imperativeFormal: Word('рассказывайте', 5),
  imperfect: ['рассказать'],
};

perfectVerbs.set(рассказывать.name.text, рассказывать);

export { рассказывать };