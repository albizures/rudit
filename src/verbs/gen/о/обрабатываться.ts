import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрабатываться: PerfectVerb = {
  name: Word('обрабатываться', 5),
  singular1stPerson: Word('обрабатываюсь', 5),
  singular2ndPerson: Word('обрабатываешься', 5),
  singular3rdPerson: Word('обрабатывается', 5),
  plural1stPerson: Word('обрабатываемся', 5),
  plural2ndPerson: Word('обрабатываетесь', 5),
  plural3rdPerson: Word('обрабатываются', 5),
  masculinePast: Word('обрабатывался', 5),
  femininePast: Word('обрабатывалась', 5),
  neuterPast: Word('обрабатывалось', 5),
  pluralPast: Word('обрабатывались', 5),
  imperativeInformal: Word('обрабатывайся', 5),
  imperativeFormal: Word('обрабатывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обрабатываться.name.text, обрабатываться);

export { обрабатываться };