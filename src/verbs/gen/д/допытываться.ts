import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допытываться: PerfectVerb = {
  name: Word('допытываться', 3),
  singular1stPerson: Word('допытываюсь', 3),
  singular2ndPerson: Word('допытываешься', 3),
  singular3rdPerson: Word('допытывается', 3),
  plural1stPerson: Word('допытываемся', 3),
  plural2ndPerson: Word('допытываетесь', 3),
  plural3rdPerson: Word('допытываются', 3),
  masculinePast: Word('допытывался', 3),
  femininePast: Word('допытывалась', 3),
  neuterPast: Word('допытывалось', 3),
  pluralPast: Word('допытывались', 3),
  imperativeInformal: Word('допытывайся', 3),
  imperativeFormal: Word('допытывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(допытываться.name.text, допытываться);

export { допытываться };