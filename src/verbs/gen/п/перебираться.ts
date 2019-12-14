import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебираться: PerfectVerb = {
  name: Word('перебираться', 7),
  singular1stPerson: Word('перебираюсь', 7),
  singular2ndPerson: Word('перебираешься', 7),
  singular3rdPerson: Word('перебирается', 7),
  plural1stPerson: Word('перебираемся', 7),
  plural2ndPerson: Word('перебираетесь', 7),
  plural3rdPerson: Word('перебираются', 7),
  masculinePast: Word('перебирался', 7),
  femininePast: Word('перебиралась', 7),
  neuterPast: Word('перебиралось', 7),
  pluralPast: Word('перебирались', 7),
  imperativeInformal: Word('перебирайся', 7),
  imperativeFormal: Word('перебирайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перебираться.name.text, перебираться);

export { перебираться };