import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмыться: PerfectVerb = {
  name: Word('отмыться', 3),
  singular1stPerson: Word('отмоюсь', 3),
  singular2ndPerson: Word('отмоешься', 3),
  singular3rdPerson: Word('отмоется', 3),
  plural1stPerson: Word('отмоемся', 3),
  plural2ndPerson: Word('отмоетесь', 3),
  plural3rdPerson: Word('отмоются', 3),
  masculinePast: Word('отмылся', 3),
  femininePast: Word('отмылась', 3),
  neuterPast: Word('отмылось', 3),
  pluralPast: Word('отмылись', 3),
  imperativeInformal: Word('отмойся', 3),
  imperativeFormal: Word('отмойтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отмыться.name.text, отмыться);

export { отмыться };