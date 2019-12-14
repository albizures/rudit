import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсыпать: PerfectVerb = {
  name: Word('обсыпать', 5),
  singular1stPerson: Word('обсыпаю', 5),
  singular2ndPerson: Word('обсыпаешь', 5),
  singular3rdPerson: Word('обсыпает', 5),
  plural1stPerson: Word('обсыпаем', 5),
  plural2ndPerson: Word('обсыпаете', 5),
  plural3rdPerson: Word('обсыпают', 5),
  masculinePast: Word('обсыпал', 5),
  femininePast: Word('обсыпала', 5),
  neuterPast: Word('обсыпало', 5),
  pluralPast: Word('обсыпали', 5),
  imperativeInformal: Word('обсыпай', 5),
  imperativeFormal: Word('обсыпайте', 5),
  imperfect: [],
};

perfectVerbs.set(обсыпать.name.text, обсыпать);

export { обсыпать };