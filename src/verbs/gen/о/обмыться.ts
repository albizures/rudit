import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмыться: PerfectVerb = {
  name: Word('обмыться', 3),
  singular1stPerson: Word('обмоюсь', 3),
  singular2ndPerson: Word('обмоешься', 3),
  singular3rdPerson: Word('обмоется', 3),
  plural1stPerson: Word('обмоемся', 3),
  plural2ndPerson: Word('обмоетесь', 3),
  plural3rdPerson: Word('обмоются', 3),
  masculinePast: Word('обмылся', 3),
  femininePast: Word('обмылась', 3),
  neuterPast: Word('обмылось', 3),
  pluralPast: Word('обмылись', 3),
  imperativeInformal: Word('обмойся', 3),
  imperativeFormal: Word('обмойтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обмыться.name.text, обмыться);

export { обмыться };