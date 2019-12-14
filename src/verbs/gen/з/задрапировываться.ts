import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задрапировываться: PerfectVerb = {
  name: Word('задрапировываться', 8),
  singular1stPerson: Word('задрапировываюсь', 8),
  singular2ndPerson: Word('задрапировываешься', 8),
  singular3rdPerson: Word('задрапировывается', 8),
  plural1stPerson: Word('задрапировываемся', 8),
  plural2ndPerson: Word('задрапировываетесь', 8),
  plural3rdPerson: Word('задрапировываются', 8),
  masculinePast: Word('задрапировывался', 8),
  femininePast: Word('задрапировывалась', 8),
  neuterPast: Word('задрапировывалось', 8),
  pluralPast: Word('задрапировывались', 8),
  imperativeInformal: Word('задрапировывайся', 8),
  imperativeFormal: Word('задрапировывайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(задрапировываться.name.text, задрапировываться);

export { задрапировываться };