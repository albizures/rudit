import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втискиваться: PerfectVerb = {
  name: Word('втискиваться', 2),
  singular1stPerson: Word('втискиваюсь', 2),
  singular2ndPerson: Word('втискиваешься', 2),
  singular3rdPerson: Word('втискивается', 2),
  plural1stPerson: Word('втискиваемся', 2),
  plural2ndPerson: Word('втискиваетесь', 2),
  plural3rdPerson: Word('втискиваются', 2),
  masculinePast: Word('втискивался', 2),
  femininePast: Word('втискивалась', 2),
  neuterPast: Word('втискивалось', 2),
  pluralPast: Word('втискивались', 2),
  imperativeInformal: Word('втискивайся', 2),
  imperativeFormal: Word('втискивайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(втискиваться.name.text, втискиваться);

export { втискиваться };