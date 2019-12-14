import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсыхать: PerfectVerb = {
  name: Word('обсыхать', 5),
  singular1stPerson: Word('обсыхаю', 5),
  singular2ndPerson: Word('обсыхаешь', 5),
  singular3rdPerson: Word('обсыхает', 5),
  plural1stPerson: Word('обсыхаем', 5),
  plural2ndPerson: Word('обсыхаете', 5),
  plural3rdPerson: Word('обсыхают', 5),
  masculinePast: Word('обсыхал', 5),
  femininePast: Word('обсыхала', 5),
  neuterPast: Word('обсыхало', 5),
  pluralPast: Word('обсыхали', 5),
  imperativeInformal: Word('обсыхай', 5),
  imperativeFormal: Word('обсыхайте', 5),
  imperfect: [],
};

perfectVerbs.set(обсыхать.name.text, обсыхать);

export { обсыхать };