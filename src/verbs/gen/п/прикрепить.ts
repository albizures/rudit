import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикрепить: PerfectVerb = {
  name: Word('прикрепить', 7),
  singular1stPerson: Word('прикреплю', 8),
  singular2ndPerson: Word('прикрепишь', 7),
  singular3rdPerson: Word('прикрепит', 7),
  plural1stPerson: Word('прикрепим', 7),
  plural2ndPerson: Word('прикрепите', 7),
  plural3rdPerson: Word('прикрепят', 7),
  masculinePast: Word('прикрепил', 7),
  femininePast: Word('прикрепила', 7),
  neuterPast: Word('прикрепило', 7),
  pluralPast: Word('прикрепили', 7),
  imperativeInformal: Word('прикрепи', 7),
  imperativeFormal: Word('прикрепите', 7),
  imperfect: ['прикреплять'],
};

perfectVerbs.set(прикрепить.name.text, прикрепить);

export { прикрепить };