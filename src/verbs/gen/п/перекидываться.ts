import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекидываться: PerfectVerb = {
  name: Word('перекидываться', 5),
  singular1stPerson: Word('перекидываюсь', 5),
  singular2ndPerson: Word('перекидываешься', 5),
  singular3rdPerson: Word('перекидывается', 5),
  plural1stPerson: Word('перекидываемся', 5),
  plural2ndPerson: Word('перекидываетесь', 5),
  plural3rdPerson: Word('перекидываются', 5),
  masculinePast: Word('перекидывался', 5),
  femininePast: Word('перекидывалась', 5),
  neuterPast: Word('перекидывалось', 5),
  pluralPast: Word('перекидывались', 5),
  imperativeInformal: Word('перекидывайся', 5),
  imperativeFormal: Word('перекидывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перекидываться.name.text, перекидываться);

export { перекидываться };