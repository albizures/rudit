import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откашливаться: PerfectVerb = {
  name: Word('откашливаться', 3),
  singular1stPerson: Word('откашливаюсь', 3),
  singular2ndPerson: Word('откашливаешься', 3),
  singular3rdPerson: Word('откашливается', 3),
  plural1stPerson: Word('откашливаемся', 3),
  plural2ndPerson: Word('откашливаетесь', 3),
  plural3rdPerson: Word('откашливаются', 3),
  masculinePast: Word('откашливался', 3),
  femininePast: Word('откашливалась', 3),
  neuterPast: Word('откашливалось', 3),
  pluralPast: Word('откашливались', 3),
  imperativeInformal: Word('откашливайся', 3),
  imperativeFormal: Word('откашливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(откашливаться.name.text, откашливаться);

export { откашливаться };