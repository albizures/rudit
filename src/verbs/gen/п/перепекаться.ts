import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепекаться: PerfectVerb = {
  name: Word('перепекаться', 7),
  singular1stPerson: Word('перепекаюсь', 7),
  singular2ndPerson: Word('перепекаешься', 7),
  singular3rdPerson: Word('перепекается', 7),
  plural1stPerson: Word('перепекаемся', 7),
  plural2ndPerson: Word('перепекаетесь', 7),
  plural3rdPerson: Word('перепекаются', 7),
  masculinePast: Word('перепекался', 7),
  femininePast: Word('перепекалась', 7),
  neuterPast: Word('перепекалось', 7),
  pluralPast: Word('перепекались', 7),
  imperativeInformal: Word('перепекайся', 7),
  imperativeFormal: Word('перепекайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перепекаться.name.text, перепекаться);

export { перепекаться };