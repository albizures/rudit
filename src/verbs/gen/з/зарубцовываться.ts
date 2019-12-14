import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарубцовываться: PerfectVerb = {
  name: Word('зарубцовываться', 6),
  singular1stPerson: Word('зарубцовываюсь', 6),
  singular2ndPerson: Word('зарубцовываешься', 6),
  singular3rdPerson: Word('зарубцовывается', 6),
  plural1stPerson: Word('зарубцовываемся', 6),
  plural2ndPerson: Word('зарубцовываетесь', 6),
  plural3rdPerson: Word('зарубцовываются', 6),
  masculinePast: Word('зарубцовывался', 6),
  femininePast: Word('зарубцовывалась', 6),
  neuterPast: Word('зарубцовывалось', 6),
  pluralPast: Word('зарубцовывались', 6),
  imperativeInformal: Word('зарубцовывайся', 6),
  imperativeFormal: Word('зарубцовывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(зарубцовываться.name.text, зарубцовываться);

export { зарубцовываться };