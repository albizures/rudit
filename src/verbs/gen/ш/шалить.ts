import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шалить: PerfectVerb = {
  name: Word('шалить', 3),
  singular1stPerson: Word('шалю', 3),
  singular2ndPerson: Word('шалишь', 3),
  singular3rdPerson: Word('шалит', 3),
  plural1stPerson: Word('шалим', 3),
  plural2ndPerson: Word('шалите', 3),
  plural3rdPerson: Word('шалят', 3),
  masculinePast: Word('шалил', 3),
  femininePast: Word('шалила', 3),
  neuterPast: Word('шалило', 3),
  pluralPast: Word('шалили', 3),
  imperativeInformal: Word('шали', 3),
  imperativeFormal: Word('шалите', 3),
  imperfect: ['пошалить'],
};

perfectVerbs.set(шалить.name.text, шалить);

export { шалить };