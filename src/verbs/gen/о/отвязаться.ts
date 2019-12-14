import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвязаться: PerfectVerb = {
  name: Word('отвязаться', 5),
  singular1stPerson: Word('отвяжусь', 5),
  singular2ndPerson: Word('отвяжешься', 3),
  singular3rdPerson: Word('отвяжется', 3),
  plural1stPerson: Word('отвяжемся', 3),
  plural2ndPerson: Word('отвяжетесь', 3),
  plural3rdPerson: Word('отвяжутся', 3),
  masculinePast: Word('отвязался', 5),
  femininePast: Word('отвязалась', 5),
  neuterPast: Word('отвязалось', 5),
  pluralPast: Word('отвязались', 5),
  imperativeInformal: Word('отвяжись', 5),
  imperativeFormal: Word('отвяжитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отвязаться.name.text, отвязаться);

export { отвязаться };