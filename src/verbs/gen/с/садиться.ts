import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const садиться: PerfectVerb = {
  name: Word('садиться', 3),
  singular1stPerson: Word('сажусь', 3),
  singular2ndPerson: Word('садишься', 3),
  singular3rdPerson: Word('садится', 3),
  plural1stPerson: Word('садимся', 3),
  plural2ndPerson: Word('садитесь', 3),
  plural3rdPerson: Word('садятся', 3),
  masculinePast: Word('садился', 3),
  femininePast: Word('садилась', 3),
  neuterPast: Word('садилось', 3),
  pluralPast: Word('садились', 3),
  imperativeInformal: Word('садись', 3),
  imperativeFormal: Word('садитесь', 3),
  imperfect: ['сесть'],
};

perfectVerbs.set(садиться.name.text, садиться);

export { садиться };