import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const строиться: PerfectVerb = {
  name: Word('строиться', 3),
  singular1stPerson: Word('строюсь', 3),
  singular2ndPerson: Word('строишься', 3),
  singular3rdPerson: Word('строится', 3),
  plural1stPerson: Word('строимся', 3),
  plural2ndPerson: Word('строитесь', 3),
  plural3rdPerson: Word('строятся', 3),
  masculinePast: Word('строился', 3),
  femininePast: Word('строилась', 3),
  neuterPast: Word('строилось', 3),
  pluralPast: Word('строились', 3),
  imperativeInformal: Word('стройся', 3),
  imperativeFormal: Word('стройтесь', 3),
  imperfect: ['построиться'],
};

perfectVerbs.set(строиться.name.text, строиться);

export { строиться };