import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развлекаться: PerfectVerb = {
  name: Word('развлекаться', 7),
  singular1stPerson: Word('развлекаюсь', 7),
  singular2ndPerson: Word('развлекаешься', 7),
  singular3rdPerson: Word('развлекается', 7),
  plural1stPerson: Word('развлекаемся', 7),
  plural2ndPerson: Word('развлекаетесь', 7),
  plural3rdPerson: Word('развлекаются', 7),
  masculinePast: Word('развлекался', 7),
  femininePast: Word('развлекалась', 7),
  neuterPast: Word('развлекалось', 7),
  pluralPast: Word('развлекались', 7),
  imperativeInformal: Word('развлекайся', 7),
  imperativeFormal: Word('развлекайтесь', 7),
  imperfect: ['развлечься'],
};

perfectVerbs.set(развлекаться.name.text, развлекаться);

export { развлекаться };