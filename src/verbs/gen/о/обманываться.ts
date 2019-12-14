import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обманываться: PerfectVerb = {
  name: Word('обманываться', 3),
  singular1stPerson: Word('обманываюсь', 3),
  singular2ndPerson: Word('обманываешься', 3),
  singular3rdPerson: Word('обманывается', 3),
  plural1stPerson: Word('обманываемся', 3),
  plural2ndPerson: Word('обманываетесь', 3),
  plural3rdPerson: Word('обманываются', 3),
  masculinePast: Word('обманывался', 3),
  femininePast: Word('обманывалась', 3),
  neuterPast: Word('обманывалось', 3),
  pluralPast: Word('обманывались', 3),
  imperativeInformal: Word('обманывайся', 3),
  imperativeFormal: Word('обманывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обманываться.name.text, обманываться);

export { обманываться };