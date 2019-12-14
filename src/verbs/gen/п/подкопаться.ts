import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкопаться: PerfectVerb = {
  name: Word('подкопаться', 6),
  singular1stPerson: Word('подкопаюсь', 6),
  singular2ndPerson: Word('подкопаешься', 6),
  singular3rdPerson: Word('подкопается', 6),
  plural1stPerson: Word('подкопаемся', 6),
  plural2ndPerson: Word('подкопаетесь', 6),
  plural3rdPerson: Word('подкопаются', 6),
  masculinePast: Word('подкопался', 6),
  femininePast: Word('подкопалась', 6),
  neuterPast: Word('подкопалось', 6),
  pluralPast: Word('подкопались', 6),
  imperativeInformal: Word('подкопайся', 6),
  imperativeFormal: Word('подкопайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подкопаться.name.text, подкопаться);

export { подкопаться };