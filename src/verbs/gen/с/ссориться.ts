import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ссориться: PerfectVerb = {
  name: Word('ссориться', 2),
  singular1stPerson: Word('ссорюсь', 2),
  singular2ndPerson: Word('ссоришься', 2),
  singular3rdPerson: Word('ссорится', 2),
  plural1stPerson: Word('ссоримся', 2),
  plural2ndPerson: Word('ссоритесь', 2),
  plural3rdPerson: Word('ссорятся', 2),
  masculinePast: Word('ссорился', 2),
  femininePast: Word('ссорилась', 2),
  neuterPast: Word('ссорилось', 2),
  pluralPast: Word('ссорились', 2),
  imperativeInformal: Word('ссорься', 2),
  imperativeFormal: Word('ссорьтесь', 2),
  imperfect: ['поссориться','рассориться'],
};

perfectVerbs.set(ссориться.name.text, ссориться);

export { ссориться };