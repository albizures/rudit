import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соглашаться: PerfectVerb = {
  name: Word('соглашаться', 6),
  singular1stPerson: Word('соглашаюсь', 6),
  singular2ndPerson: Word('соглашаешься', 6),
  singular3rdPerson: Word('соглашается', 6),
  plural1stPerson: Word('соглашаемся', 6),
  plural2ndPerson: Word('соглашаетесь', 6),
  plural3rdPerson: Word('соглашаются', 6),
  masculinePast: Word('соглашался', 6),
  femininePast: Word('соглашалась', 6),
  neuterPast: Word('соглашалось', 6),
  pluralPast: Word('соглашались', 6),
  imperativeInformal: Word('соглашайся', 6),
  imperativeFormal: Word('соглашайтесь', 6),
  imperfect: ['согласиться'],
};

perfectVerbs.set(соглашаться.name.text, соглашаться);

export { соглашаться };