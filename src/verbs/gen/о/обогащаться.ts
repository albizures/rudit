import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обогащаться: PerfectVerb = {
  name: Word('обогащаться', 6),
  singular1stPerson: Word('обогащаюсь', 6),
  singular2ndPerson: Word('обогащаешься', 6),
  singular3rdPerson: Word('обогащается', 6),
  plural1stPerson: Word('обогащаемся', 6),
  plural2ndPerson: Word('обогащаетесь', 6),
  plural3rdPerson: Word('обогащаются', 6),
  masculinePast: Word('обогащался', 6),
  femininePast: Word('обогащалась', 6),
  neuterPast: Word('обогащалось', 6),
  pluralPast: Word('обогащались', 6),
  imperativeInformal: Word('обогащайся', 6),
  imperativeFormal: Word('обогащайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(обогащаться.name.text, обогащаться);

export { обогащаться };