import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бриться: PerfectVerb = {
  name: Word('бриться', 2),
  singular1stPerson: Word('бреюсь', 2),
  singular2ndPerson: Word('бреешься', 2),
  singular3rdPerson: Word('бреется', 2),
  plural1stPerson: Word('бреемся', 2),
  plural2ndPerson: Word('бреетесь', 2),
  plural3rdPerson: Word('бреются', 2),
  masculinePast: Word('брился', 2),
  femininePast: Word('брилась', 2),
  neuterPast: Word('брилось', 2),
  pluralPast: Word('брились', 2),
  imperativeInformal: Word('брейся', 2),
  imperativeFormal: Word('брейтесь', 2),
  imperfect: ['побриться'],
};

perfectVerbs.set(бриться.name.text, бриться);

export { бриться };