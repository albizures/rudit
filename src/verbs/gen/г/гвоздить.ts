import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гвоздить: PerfectVerb = {
  name: Word('гвоздить', 5),
  singular1stPerson: Word('гвозжу', 5),
  singular2ndPerson: Word('гвоздишь', 5),
  singular3rdPerson: Word('гвоздит', 5),
  plural1stPerson: Word('гвоздим', 5),
  plural2ndPerson: Word('гвоздите', 5),
  plural3rdPerson: Word('гвоздят', 5),
  masculinePast: Word('гвоздил', 5),
  femininePast: Word('гвоздила', 5),
  neuterPast: Word('гвоздило', 5),
  pluralPast: Word('гвоздили', 5),
  imperativeInformal: Word('гвозди', 5),
  imperativeFormal: Word('гвоздите', 5),
  imperfect: [],
};

perfectVerbs.set(гвоздить.name.text, гвоздить);

export { гвоздить };