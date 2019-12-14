import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const придвигать: PerfectVerb = {
  name: Word('придвигать', 7),
  singular1stPerson: Word('придвигаю', 7),
  singular2ndPerson: Word('придвигаешь', 7),
  singular3rdPerson: Word('придвигает', 7),
  plural1stPerson: Word('придвигаем', 7),
  plural2ndPerson: Word('придвигаете', 7),
  plural3rdPerson: Word('придвигают', 7),
  masculinePast: Word('придвигал', 7),
  femininePast: Word('придвигала', 7),
  neuterPast: Word('придвигало', 7),
  pluralPast: Word('придвигали', 7),
  imperativeInformal: Word('придвигай', 7),
  imperativeFormal: Word('придвигайте', 7),
  imperfect: [],
};

perfectVerbs.set(придвигать.name.text, придвигать);

export { придвигать };