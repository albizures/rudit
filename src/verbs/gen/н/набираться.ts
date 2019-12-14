import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набираться: PerfectVerb = {
  name: Word('набираться', 5),
  singular1stPerson: Word('набираюсь', 5),
  singular2ndPerson: Word('набираешься', 5),
  singular3rdPerson: Word('набирается', 5),
  plural1stPerson: Word('набираемся', 5),
  plural2ndPerson: Word('набираетесь', 5),
  plural3rdPerson: Word('набираются', 5),
  masculinePast: Word('набирался', 5),
  femininePast: Word('набиралась', 5),
  neuterPast: Word('набиралось', 5),
  pluralPast: Word('набирались', 5),
  imperativeInformal: Word('набирайся', 5),
  imperativeFormal: Word('набирайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(набираться.name.text, набираться);

export { набираться };