import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обугливаться: PerfectVerb = {
  name: Word('обугливаться', 2),
  singular1stPerson: Word('обугливаюсь', 2),
  singular2ndPerson: Word('обугливаешься', 2),
  singular3rdPerson: Word('обугливается', 2),
  plural1stPerson: Word('обугливаемся', 2),
  plural2ndPerson: Word('обугливаетесь', 2),
  plural3rdPerson: Word('обугливаются', 2),
  masculinePast: Word('обугливался', 2),
  femininePast: Word('обугливалась', 2),
  neuterPast: Word('обугливалось', 2),
  pluralPast: Word('обугливались', 2),
  imperativeInformal: Word('обугливайся', 2),
  imperativeFormal: Word('обугливайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(обугливаться.name.text, обугливаться);

export { обугливаться };