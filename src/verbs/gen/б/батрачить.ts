import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const батрачить: PerfectVerb = {
  name: Word('батрачить', 4),
  singular1stPerson: Word('батрачу', 4),
  singular2ndPerson: Word('батрачишь', 4),
  singular3rdPerson: Word('батрачит', 4),
  plural1stPerson: Word('батрачим', 4),
  plural2ndPerson: Word('батрачите', 4),
  plural3rdPerson: Word('батрачат', 4),
  masculinePast: Word('батрачил', 4),
  femininePast: Word('батрачила', 4),
  neuterPast: Word('батрачило', 4),
  pluralPast: Word('батрачили', 4),
  imperativeInformal: Word('батрачь', 4),
  imperativeFormal: Word('батрачьте', 4),
  imperfect: [],
};

perfectVerbs.set(батрачить.name.text, батрачить);

export { батрачить };