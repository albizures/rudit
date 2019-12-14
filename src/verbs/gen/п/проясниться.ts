import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проясниться: PerfectVerb = {
  name: Word('проясниться', 6),
  singular1stPerson: Word('прояснюсь', 6),
  singular2ndPerson: Word('прояснишься', 6),
  singular3rdPerson: Word('прояснится', 6),
  plural1stPerson: Word('прояснимся', 6),
  plural2ndPerson: Word('прояснитесь', 6),
  plural3rdPerson: Word('прояснятся', 6),
  masculinePast: Word('прояснился', 6),
  femininePast: Word('прояснилась', 6),
  neuterPast: Word('прояснилось', 6),
  pluralPast: Word('прояснились', 6),
  imperativeInformal: Word('прояснись', 6),
  imperativeFormal: Word('прояснитесь', 6),
  imperfect: [],
};

perfectVerbs.set(проясниться.name.text, проясниться);

export { проясниться };