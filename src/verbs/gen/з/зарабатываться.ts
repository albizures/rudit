import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарабатываться: PerfectVerb = {
  name: Word('зарабатываться', 5),
  singular1stPerson: Word('зарабатываюсь', 5),
  singular2ndPerson: Word('зарабатываешься', 5),
  singular3rdPerson: Word('зарабатывается', 5),
  plural1stPerson: Word('зарабатываемся', 5),
  plural2ndPerson: Word('зарабатываетесь', 5),
  plural3rdPerson: Word('зарабатываются', 5),
  masculinePast: Word('зарабатывался', 5),
  femininePast: Word('зарабатывалась', 5),
  neuterPast: Word('зарабатывалось', 5),
  pluralPast: Word('зарабатывались', 5),
  imperativeInformal: Word('зарабатывайся', 5),
  imperativeFormal: Word('зарабатывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(зарабатываться.name.text, зарабатываться);

export { зарабатываться };