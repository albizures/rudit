import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрываться: PerfectVerb = {
  name: Word('обрываться', 5),
  singular1stPerson: Word('обрываюсь', 5),
  singular2ndPerson: Word('обрываешься', 5),
  singular3rdPerson: Word('обрывается', 5),
  plural1stPerson: Word('обрываемся', 5),
  plural2ndPerson: Word('обрываетесь', 5),
  plural3rdPerson: Word('обрываются', 5),
  masculinePast: Word('обрывался', 5),
  femininePast: Word('обрывалась', 5),
  neuterPast: Word('обрывалось', 5),
  pluralPast: Word('обрывались', 5),
  imperativeInformal: Word('обрывайся', 5),
  imperativeFormal: Word('обрывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обрываться.name.text, обрываться);

export { обрываться };