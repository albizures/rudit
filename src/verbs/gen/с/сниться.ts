import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сниться: PerfectVerb = {
  name: Word('сниться', 2),
  singular1stPerson: Word('снюсь', 2),
  singular2ndPerson: Word('снишься', 2),
  singular3rdPerson: Word('снится', 2),
  plural1stPerson: Word('снимся', 2),
  plural2ndPerson: Word('снитесь', 2),
  plural3rdPerson: Word('снятся', 2),
  masculinePast: Word('снился', 2),
  femininePast: Word('снилась', 2),
  neuterPast: Word('снилось', 2),
  pluralPast: Word('снились', 2),
  imperativeInformal: Word('снись', 2),
  imperativeFormal: Word('снитесь', 2),
  imperfect: ['присниться'],
};

perfectVerbs.set(сниться.name.text, сниться);

export { сниться };