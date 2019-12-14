import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прослезиться: PerfectVerb = {
  name: Word('прослезиться', 7),
  singular1stPerson: Word('прослежусь', 7),
  singular2ndPerson: Word('прослезишься', 7),
  singular3rdPerson: Word('прослезится', 7),
  plural1stPerson: Word('прослезимся', 7),
  plural2ndPerson: Word('прослезитесь', 7),
  plural3rdPerson: Word('прослезятся', 7),
  masculinePast: Word('прослезился', 7),
  femininePast: Word('прослезилась', 7),
  neuterPast: Word('прослезилось', 7),
  pluralPast: Word('прослезились', 7),
  imperativeInformal: Word('прослезись', 7),
  imperativeFormal: Word('прослезитесь', 7),
  imperfect: [],
};

perfectVerbs.set(прослезиться.name.text, прослезиться);

export { прослезиться };