import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачитываться: PerfectVerb = {
  name: Word('зачитываться', 3),
  singular1stPerson: Word('зачитываюсь', 3),
  singular2ndPerson: Word('зачитываешься', 3),
  singular3rdPerson: Word('зачитывается', 3),
  plural1stPerson: Word('зачитываемся', 3),
  plural2ndPerson: Word('зачитываетесь', 3),
  plural3rdPerson: Word('зачитываются', 3),
  masculinePast: Word('зачитывался', 3),
  femininePast: Word('зачитывалась', 3),
  neuterPast: Word('зачитывалось', 3),
  pluralPast: Word('зачитывались', 3),
  imperativeInformal: Word('зачитывайся', 3),
  imperativeFormal: Word('зачитывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(зачитываться.name.text, зачитываться);

export { зачитываться };