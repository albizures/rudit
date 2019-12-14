import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потесниться: PerfectVerb = {
  name: Word('потесниться', 6),
  singular1stPerson: Word('потеснюсь', 6),
  singular2ndPerson: Word('потеснишься', 6),
  singular3rdPerson: Word('потеснится', 6),
  plural1stPerson: Word('потеснимся', 6),
  plural2ndPerson: Word('потеснитесь', 6),
  plural3rdPerson: Word('потеснятся', 6),
  masculinePast: Word('потеснился', 6),
  femininePast: Word('потеснилась', 6),
  neuterPast: Word('потеснилось', 6),
  pluralPast: Word('потеснились', 6),
  imperativeInformal: Word('потеснись', 6),
  imperativeFormal: Word('потеснитесь', 6),
  imperfect: [],
};

perfectVerbs.set(потесниться.name.text, потесниться);

export { потесниться };