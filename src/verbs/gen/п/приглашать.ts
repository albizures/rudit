import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приглашать: PerfectVerb = {
  name: Word('приглашать', 7),
  singular1stPerson: Word('приглашаю', 7),
  singular2ndPerson: Word('приглашаешь', 7),
  singular3rdPerson: Word('приглашает', 7),
  plural1stPerson: Word('приглашаем', 7),
  plural2ndPerson: Word('приглашаете', 7),
  plural3rdPerson: Word('приглашают', 7),
  masculinePast: Word('приглашал', 7),
  femininePast: Word('приглашала', 7),
  neuterPast: Word('приглашало', 7),
  pluralPast: Word('приглашали', 7),
  imperativeInformal: Word('приглашай', 7),
  imperativeFormal: Word('приглашайте', 7),
  imperfect: ['пригласить'],
};

perfectVerbs.set(приглашать.name.text, приглашать);

export { приглашать };