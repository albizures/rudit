import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доискиваться: PerfectVerb = {
  name: Word('доискиваться', 2),
  singular1stPerson: Word('доискиваюсь', 2),
  singular2ndPerson: Word('доискиваешься', 2),
  singular3rdPerson: Word('доискивается', 2),
  plural1stPerson: Word('доискиваемся', 2),
  plural2ndPerson: Word('доискиваетесь', 2),
  plural3rdPerson: Word('доискиваются', 2),
  masculinePast: Word('доискивался', 2),
  femininePast: Word('доискивалась', 2),
  neuterPast: Word('доискивалось', 2),
  pluralPast: Word('доискивались', 2),
  imperativeInformal: Word('доискивайся', 2),
  imperativeFormal: Word('доискивайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(доискиваться.name.text, доискиваться);

export { доискиваться };