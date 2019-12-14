import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присниться: PerfectVerb = {
  name: Word('присниться', 5),
  singular1stPerson: Word('приснюсь', 5),
  singular2ndPerson: Word('приснишься', 5),
  singular3rdPerson: Word('приснится', 5),
  plural1stPerson: Word('приснимся', 5),
  plural2ndPerson: Word('приснитесь', 5),
  plural3rdPerson: Word('приснятся', 5),
  masculinePast: Word('приснился', 5),
  femininePast: Word('приснилась', 5),
  neuterPast: Word('приснилось', 5),
  pluralPast: Word('приснились', 5),
  imperativeInformal: Word('приснись', 5),
  imperativeFormal: Word('приснитесь', 5),
  imperfect: ['сниться'],
};

perfectVerbs.set(присниться.name.text, присниться);

export { присниться };