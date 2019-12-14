import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протискиваться: PerfectVerb = {
  name: Word('протискиваться', 4),
  singular1stPerson: Word('протискиваюсь', 4),
  singular2ndPerson: Word('протискиваешься', 4),
  singular3rdPerson: Word('протискивается', 4),
  plural1stPerson: Word('протискиваемся', 4),
  plural2ndPerson: Word('протискиваетесь', 4),
  plural3rdPerson: Word('протискиваются', 4),
  masculinePast: Word('протискивался', 4),
  femininePast: Word('протискивалась', 4),
  neuterPast: Word('протискивалось', 4),
  pluralPast: Word('протискивались', 4),
  imperativeInformal: Word('протискивайся', 4),
  imperativeFormal: Word('протискивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(протискиваться.name.text, протискиваться);

export { протискиваться };