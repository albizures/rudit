import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провозглашать: PerfectVerb = {
  name: Word('провозглашать', 10),
  singular1stPerson: Word('провозглашаю', 10),
  singular2ndPerson: Word('провозглашаешь', 10),
  singular3rdPerson: Word('провозглашает', 10),
  plural1stPerson: Word('провозглашаем', 10),
  plural2ndPerson: Word('провозглашаете', 10),
  plural3rdPerson: Word('провозглашают', 10),
  masculinePast: Word('провозглашал', 10),
  femininePast: Word('провозглашала', 10),
  neuterPast: Word('провозглашало', 10),
  pluralPast: Word('провозглашали', 10),
  imperativeInformal: Word('провозглашай', 10),
  imperativeFormal: Word('провозглашайте', 10),
  imperfect: ['провозгласить'],
};

perfectVerbs.set(провозглашать.name.text, провозглашать);

export { провозглашать };