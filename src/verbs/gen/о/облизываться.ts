import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облизываться: PerfectVerb = {
  name: Word('облизываться', 3),
  singular1stPerson: Word('облизываюсь', 3),
  singular2ndPerson: Word('облизываешься', 3),
  singular3rdPerson: Word('облизывается', 3),
  plural1stPerson: Word('облизываемся', 3),
  plural2ndPerson: Word('облизываетесь', 3),
  plural3rdPerson: Word('облизываются', 3),
  masculinePast: Word('облизывался', 3),
  femininePast: Word('облизывалась', 3),
  neuterPast: Word('облизывалось', 3),
  pluralPast: Word('облизывались', 3),
  imperativeInformal: Word('облизывайся', 3),
  imperativeFormal: Word('облизывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(облизываться.name.text, облизываться);

export { облизываться };