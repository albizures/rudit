import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простираться: PerfectVerb = {
  name: Word('простираться', 7),
  singular1stPerson: Word('простираюсь', 7),
  singular2ndPerson: Word('простираешься', 7),
  singular3rdPerson: Word('простирается', 7),
  plural1stPerson: Word('простираемся', 7),
  plural2ndPerson: Word('простираетесь', 7),
  plural3rdPerson: Word('простираются', 7),
  masculinePast: Word('простирался', 7),
  femininePast: Word('простиралась', 7),
  neuterPast: Word('простиралось', 7),
  pluralPast: Word('простирались', 7),
  imperativeInformal: Word('простирайся', 7),
  imperativeFormal: Word('простирайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(простираться.name.text, простираться);

export { простираться };